import ZapparSharing from '@zappar/sharing';

// Get canvas from dom
const canvas = document.querySelector('canvas');
// Convert canvas data to url
const url = canvas!.toDataURL('image/jpeg', 0.8);
// Take snapshot
ZapparSharing({
  data: url,
});