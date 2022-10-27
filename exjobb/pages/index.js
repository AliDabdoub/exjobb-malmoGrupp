import styles from 'styles/Home.module.scss'
import Link from "next/link";



export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.linkUpper}><h1>Upload your <Link href='/closet'><a>closet</a></Link><br></br></h1></div>
      <div className={styles.linkMittle}><h1><Link href='/create'><a>Create</a></Link> your outfits</h1></div>
      <div className={styles.linkBelow}><h1>Collect your <Link href='/outfit'><a>outfits</a></Link></h1></div>
      <div className='logo'><img src="logo.svg"></img></div>

    </div>
  )
}
