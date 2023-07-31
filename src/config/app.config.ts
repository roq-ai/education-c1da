interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: ['Student'],
  tenantRoles: ['Administrator', 'Teacher', 'Student'],
  tenantName: 'Organization',
  applicationName: 'education',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
