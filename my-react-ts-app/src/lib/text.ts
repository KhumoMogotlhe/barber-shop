export const getInitials = (name: string) => {
  const parts = name.trim().split(' ');
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
};