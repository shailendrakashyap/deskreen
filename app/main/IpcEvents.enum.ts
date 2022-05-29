// eslint-disable-next-line import/prefer-default-export
export enum IpcEvents {
  CreateWaitingForConnectionSharingSession = 'create-waiting-for-connection-sharing-session',
  SetPendingConnectionDevice = 'set-pending-connection-device',
  UnmarkRoomIDAsTaken = 'unmark-room-id-as-taken',
  GetAppPath = 'get-app-path',
  ResetWaitingForConnectionSharingSession = 'reset-waiting-for-connection-sharing-session',
  SetDeviceConnectedStatus = 'set-device-connected-status',
  GetSourceDisplayIDByDesktopCapturerSourceID = 'get-source-display-id-by-desktop-capturer-source-id',
}
