
import * as _ from 'lodash';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

async function getDeviceList(){
  let device = await navigator.usb.requestDevice({
    'filters': [
      {'classCode': 3} // USB HID devices
    ]
  })
  await device.open()
  await device.selectConfiguration(1)
  await device.claimInterface(0)
  let data = await device.transferIn(1, 8)
  console.log(data)
}

document.body.appendChild(component());
const button = document.createElement('BUTTON')
button.innerText = 'click me'
button.onclick = getDeviceList
document.body.appendChild(button)