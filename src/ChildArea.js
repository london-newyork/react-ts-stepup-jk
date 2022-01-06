import React from 'react'
import { memo } from 'react'
import styles from './styles.module.css'

export const ChildArea = memo((props) => {
    const { open, onClickClose } = props
    console.log('childAreaがレンダリングされた!');

    const data = [...Array(2000).keys()]
    data.forEach(()=> {
        console.log("...")
    })
    return (
        <>
        {open ? (
            <div className={styles.container2}>
                <p>子コンポーネント</p>
                <button className={styles.btn} onClick={onClickClose}>閉じる</button>
            </div>
        ) : null}
        </>
    )
})
