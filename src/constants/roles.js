const condition = authUser => authUser.role === 'ADMIN';
 
// permission-based authorization
const condition = authUser => authUser.permissions.canEditAccount;
