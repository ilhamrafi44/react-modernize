
import React from 'react';
import Breadcrumb from '@modernize/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '@modernize/components/container/PageContainer';
import TaskManager from '@modernize/components/apps/kanban/TaskManager';
import { KanbanDataContextProvider } from '@modernize/context/kanbancontext/index';
import BlankCard from '@modernize/components/shared/BlankCard';
import { CardContent } from '@mui/material';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Kanban',
  },
];

const Kanban = () => {
  return (
    <KanbanDataContextProvider>
      <PageContainer title="Kanban App" description="this is Kanban App">
        <Breadcrumb title="Kanban app" items={BCrumb} />
        <BlankCard>
          <CardContent>
            <TaskManager />
          </CardContent>
        </BlankCard>
      </PageContainer>
    </KanbanDataContextProvider>
  );
};

export default Kanban;
