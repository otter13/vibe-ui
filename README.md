# vibe-ui: a lightweight UI component library based on react
The lightweight component library based on React - does not rely on any third -party UI component library. It supports import-on-demand and can be customised.

The following UI components have been developed.
* Button - Button component
* Badge - Logo number component
* Alert - Warning prompt component
* Drawer - Drawer component
* Progress - Progress bar component
* Switch - Switching component
* Tag - Tag component
* Modal - Lightweight and practical modal window component
* Ico - （Second package based on React-ICons）
* Input - Input box component
* Spin - Loading component
* Notification - Notification prompt
* Message - Message prompt box component
* Empty - Empty state component
* Skeleton - Solk screen components prepared for personal websites

Components that are being developed:
* Form - form component
* Table - List component
* Menu - Menu component
* DropDown - Drop -down box component

In the future, more high -quality lightweight components will be developed, so stay tuned.

# Tech stack
This component library is based on the pacakges and version:
* react: 16.8.6
* react-dom: 6.8.6
* classnames

# Document + demonstration
TBA

# Use

## 1.Install
``` js
npm install @otter13/vibe-ui
```
Or install via yarn
``` js
yarn add @otter13/vibe-ui
```
## 2. How to use
``` jsx
import { 
  Button,
  Skeleton,
  Empty,
  Progress,
  Tag,
  Switch,
  Drawer,
  Badge,
  Alert
} from '@otter13/vide-ui'
import { useState } from 'react'
import styles from './index.css'

export default function() {
  const [visible, setVisible] = useState(false)
  let show = () => { setVisible(true)}
  let close = () => { setVisible(false)}
  return (
    <div className={styles.normal}>
      <Button className={styles.btn}>default</Button>
      <Button className={styles.btn} type="warning">warning</Button>
      <Button className={styles.btn} type="primary">primary</Button>
      <Button className={styles.btn} type="info">info</Button>
      <Button className={styles.btn} type="pure">pure</Button>
      <Button className={styles.btn} type="primary" shape="circle">circle</Button>
      <Button className={styles.mb16} type="primary" block>primary&block</Button>
      <Button type="warning" shape="circle" block onClick={show}>circle&block</Button>
      {/* <Skeleton /> */}
      <Progress
        percent={10}
      />
      <Progress
        percent={50}
        themeColor="#009933"
      />
      <Progress
        percent={50}
        width={240}
      />
      <Progress
        percent={30}
        width={240}
        textColor="#fff"
      />
      <Progress
        percent={50}
        width={200}
        themeColor="#FF6666"
        hiddenText
      />
      <Progress
        percent={10}
        themeColor="#6699FF"
        statusScope={[[18, 'red'], [40, 'orange']]}
      />
      <Progress
        percent={20}
        themeColor="#6699FF"
        statusScope={[[18, 'red'], [40, 'orange']]}
      />
      <div className={styles.mb16}></div>
      <Tag>Html</Tag>
      <Tag closable>react</Tag>
      <Tag color="#FF99CC">Css3</Tag>
      <Tag color="#06c" closable>react</Tag>
      <Tag color="rgb(135, 208, 104)">Node</Tag>
      <div className={styles.mb16}></div>
      <Switch onText="on" offText="off" size="small" />
      <Badge text="ddd" status="warning">6666ngd</Badge>
      <div className={styles.mb16}></div>
      <Alert message="success tip" />
      <Alert message="success tip" type="success" />
      <Alert message="success tip" type="error" />
      <Alert message="success tip" type="info" />
      <Alert message="success tip" type="info" closable />
      <Alert message="success tip" description="skfjdsalajdfjadkfjaldfhjaskdn aloha" closable type="success" />
      <Empty />
      <Drawer visible={visible} onClose={close} destroyOnClose>
        <h3>Here is a title/h3>
        <br/>
        <input type="text"/>
        <br />
        <textarea />
      </Drawer>
    </div>
  )
}

```

