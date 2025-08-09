import Breadcrumb from '@modernize/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from '@modernize/components/container/PageContainer';
import ReactDenseTable from '@modernize/components/react-tables/dense/page';


const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Dense Table ",
  },
];
function page() {
  return (
    <>
      <PageContainer title="React Dense Table" description="this is React Dense Table page">

        <Breadcrumb title="Dense Table " items={BCrumb} />
        <div>
          <ReactDenseTable />
        </div>
      </PageContainer>
    </>
  );
}

export default page;
