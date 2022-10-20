import React, { useEffect, useState } from 'react';

import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import Table, { AutoResizer } from 'react-base-table';

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
  },
  {
    key: 'tags',
    dataKey: 'tags',
    title: 'Tags',
    width: 250,
    flexGrow: 0,
  },
  {
    key: 'message',
    dataKey: 'message',
    title: 'Message',
    width: 500,
    cellRenderer: ({ cellData }: { cellData: any }) => (
      <div style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(cellData)}</div>
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
          onEndReachedThreshold={300}
          onEndReached={handleEndReached}
          footerRenderer={renderFooter}
          emptyRenderer={renderEmpty}
        />
      )}
    </AutoResizer>
  );
}
