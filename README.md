# vibe-ui: a lightweight UI component library based on react
A lightweight UI component library based on react. Currently no dependencies on other 3rd party ui component libraries. Supports import by needs. Can be customised.

The UI components implemented in this library：
* Button

More supreme components upcoming. Be ready :)

# Dependencies and versions
This project was build based on following framework/modules:
* react: 16.8.6
* react-dom: 6.8.6
* classnames

# Docs and demos

# How to use

## 1.Installation
``` js
npm install @otter13/vide-u
```
Or use yarn
``` js
yarn add @otter13/vide-u
```
## 2. Example
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
    </div>
  )
}

```

