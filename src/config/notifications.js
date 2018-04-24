/*
 * Notifications
 */

export default {
  list: [
    {
      date: new Date(2018, 3, 30, 10),
      repeat: false,
      notification: {
        title: '4FFCh - Festival de Cine de Chascomús',
        body: 'Este jueves 3 arranca el 4FCCh, acercate!',
        ios: {
          sound: true,
        },
        android: {
          sound: true,
          priority: 'high',
          sticky: false,
          vibrate: true,
        },
      },
    },
    {
      date: new Date(2018, 4, 3, 10),
      repeat: false,
      notification: {
        title: '4FFCh - Festival de Cine de Chascomús',
        body: 'Arranca el 4FCCh, te esperamos!',
        ios: {
          sound: true,
        },
        android: {
          sound: true,
          priority: 'high',
          sticky: false,
          vibrate: true,
        },
      },
    },
  ],
};
