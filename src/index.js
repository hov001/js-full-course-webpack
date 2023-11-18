import { createElement } from "./createElement"
import styles from './style.css'

const root = document.getElementById('root')

root.append(createElement({tagName: 'h1', content: 'hello world!!!'}))

