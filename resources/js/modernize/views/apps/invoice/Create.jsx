import React from 'react';
import Breadcrumb from '@modernize/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '@modernize/components/container/PageContainer';
import CreateInvoiceApp from '@modernize/components/apps/invoice/Add-invoice';
import BlankCard from '@modernize/components/shared/BlankCard';
import { CardContent } from '@mui/material';
import { InvoiceProvider } from '@modernize/context/InvoiceContext';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'Invoice Create',
  },
];

const CreateInvoice = () => {
  return (
    <InvoiceProvider>
      <PageContainer title="Create Invoice" description="this is Create Invoice">
        <Breadcrumb title="Create Invoice" items={BCrumb} />

        <BlankCard>
          <CardContent>
            <CreateInvoiceApp />
          </CardContent>
        </BlankCard>
      </PageContainer>
    </InvoiceProvider>
  );
};
export default CreateInvoice;
