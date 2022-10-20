import React, { useEffect, useState } from 'react';

import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
// Import dynamic from 'next/dynamic';
import Badge from '@mui/material/Badge';
import Table, { AutoResizer } from 'react-base-table';
// Const JsonViewerNoSSR = dynamic(() => import('react-json-view'), { ssr: false });

type Color = 'info' | 'warning' | 'error';

const badgeColor: Record<string, Color> = {
  info: 'info',
  warn: 'warning',
  error: 'error',
};

const PAGE_SIZE = 50;

const columns = [
  {
    key: 'timestamp',
    dataKey: 'timestamp',
    title: 'Timestamp',
    width: 200,
    flexGrow: 0,
  },
  {
    key: 'level',
    dataKey: 'level',
    title: 'Level',
    width: 50,
    flexGrow: 0,
    cellRenderer: ({ cellData }: { cellData: string }) => (
      <Badge sx={{ margin: '16px' }} badgeContent={cellData} color={badgeColor[cellData]} />
    ),
  },
  {
    key: 'tags',
    dataKey: 'tags',
    title: 'Tags',
    width: 50,
    flexGrow: 0,
  },
  {
    key: 'message',
    dataKey: 'message',
    title: 'Message',
    resizable: true,
    width: 500,
    cellRenderer: ({ cellData }: { cellData: any }) =>
      typeof cellData === 'object' ? (
        // <JsonViewerNoSSR
        //   collapsed
        //   enableClipboard={false}
        //   name={null}
        //   src={cellData}
        //   indentWidth={2}
        //   displayDataTypes={false}
        //   displayObjectSize={false}
        // />
        <div>{JSON.stringify(cellData)}</div>
      ) : (
        <span>{cellData}</span>
      ),
    flexGrow: 0,
  },
];

const Empty = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  display: inline-block;
  border-radius: 100%;
  margin: 2px;
  border: 2px solid #0696d7;
  border-bottom-color: transparent;
  margin: 2px;
  width: 22px;
  height: 22px;
  animation: ${rotate} 0.75s linear infinite;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export function InfiniteTable() {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loadedAll, setLoadedAll] = useState(false);

  const loadData = () => {
    fetch(`/api/logs?offset=${data.length}&size=${PAGE_SIZE}`)
      .then((res) => res.json())
      .then((resData) => {
        setData(resData.logs);
        setLoading(false);
        setLoadedAll(resData.logs.length < PAGE_SIZE);
      });
  };

  const loadMore = () => {
    setLoadingMore(true);

    fetch(`/api/logs?offset=${data.length}&size=${PAGE_SIZE}`)
      .then((res) => res.json())
      .then((newData) => {
        setData(data.concat(newData.logs));
        setLoading(false);
        setLoadingMore(false);
        setLoadedAll(newData.logs.length < PAGE_SIZE);
      });
  };

  const handleEndReached = () => {
    if (loading || loadedAll) return;
    loadMore();
  };

  const renderFooter = () => {
    if (!loadingMore) return null;
    return (
      <Footer>
        <Loader />
      </Footer>
    );
  };

  const renderEmpty = () => {
    if (loading)
      return (
        <Empty>
          <Loader />
        </Empty>
      );
    return <Empty>No data available</Empty>;
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <AutoResizer>
      {({ width, height }) => (
        <Table
          width={width}
          height={height}
          fixed
          columns={columns}
          data={data}
          disabled={loading}
          footerHeight={loadingMore ? 50 : 0}
          estimatedRowHeight={40}
          onEndReachedThreshold={300}
          onEndReached={handleEndReached}
          footerRenderer={renderFooter}
          emptyRenderer={renderEmpty}
        />
      )}
    </AutoResizer>
  );
}
