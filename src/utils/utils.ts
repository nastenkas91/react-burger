export const getStatusMessage = (orderStatusInfo: string) => {
  switch (orderStatusInfo) {
    case 'done':
      return 'Выполнен';
    case 'pending':
      return 'Готовится';
    case 'created':
      return 'Создан';
    default:
      return orderStatusInfo
  }
}