/*
 * Sonatype Nexus (TM) Open Source Version
 * Copyright (c) 2008-present Sonatype, Inc.
 * All rights reserved. Includes the third-party code listed at http://links.sonatype.com/products/nexus/oss/attributions.
 *
 * This program and the accompanying materials are made available under the terms of the Eclipse Public License Version 1.0,
 * which accompanies this distribution and is available at http://www.eclipse.org/legal/epl-v10.html.
 *
 * Sonatype Nexus (TM) Professional Version is available from Sonatype, Inc. "Sonatype" and "Sonatype Nexus" are trademarks
 * of Sonatype, Inc. Apache Maven is a trademark of the Apache Software Foundation. M2eclipse is a trademark of the
 * Eclipse Foundation. All other trademarks are the property of their respective owners.
 */
import React from 'react';
import {NxFilterInput, NxTable} from '@sonatype/react-shared-components';

import useInsightListMachine from './useInsightListMachine';

export default function DownloadsByRepositoryName({downloadsByRepositoryName}) {
  const byRepositoryName = useInsightListMachine('DownloadsByRepository', downloadsByRepositoryName);

  return (
      <div className="nx-scrollable nx-table-container">
        <NxTable className="nx-table">
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell isSortable sortDir={byRepositoryName.idSortDir} onClick={byRepositoryName.sortById}>
                Repository
              </NxTable.Cell>
              <NxTable.Cell isSortable sortDir={byRepositoryName.countSortDir} onClick={byRepositoryName.sortByCount}>
                Downloads
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row isFilterHeader>
              <NxTable.Cell colSpan="2">
                <NxFilterInput placeholder="Filter by Repository"
                               id="repositoryFilter"
                               onChange={byRepositoryName.setFilter}
                               value={byRepositoryName.filter}
                />
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body emptyMessage="No data">
            {byRepositoryName.data.map((row, index) =>
                <NxTable.Row key={index}>
                  <NxTable.Cell>{row.identifier}</NxTable.Cell>
                  <NxTable.Cell>{row.downloadCount}</NxTable.Cell>
                </NxTable.Row>
            )}
          </NxTable.Body>
        </NxTable>
      </div>
  );
}