import QRCode from 'qrcode.react';

export default function QRCodeGenerator({ quizId }) {
  const url = `${window.location.origin}/join/${quizId}`;
  return <QRCode value={url} />;
}
