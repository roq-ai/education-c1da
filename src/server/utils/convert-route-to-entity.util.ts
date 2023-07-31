const mapping: Record<string, string> = {
  assignments: 'assignment',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
