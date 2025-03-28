import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import UserAddressCard from "../../../components/UserProfile/UserAddressCard";
import UserInfoCard from "../../../components/UserProfile/UserInfoCard";
import UserMetaCard from "../../../components/UserProfile/UserMetaCard";

export default function UserProfile() {
  return (
    <>
      <PageBreadcrumb pageTitle="Perfil" />
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
          Perfil do usario
        </h3>
        <div className="space-y-6">
          <UserMetaCard />
          <UserInfoCard />
          <UserAddressCard />
        </div>
      </div>
    </>
  );
}
