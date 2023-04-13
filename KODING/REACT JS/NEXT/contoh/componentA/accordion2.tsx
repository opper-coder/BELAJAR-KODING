const dataCollection = [
    {
        tanya1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, id?",
        jawab1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum quos rerum obcaecati, deleniti provident ab itaque aspernatur vero consectetur aliquid."
    }, {
        tanya2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, id?",
        jawab2: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum quos rerum obcaecati, deleniti provident ab itaque aspernatur vero consectetur aliquid."
    }, {
        tanya3: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, id?",
        jawab3: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum quos rerum obcaecati, deleniti provident ab itaque aspernatur vero consectetur aliquid."
    }, {
        tanya4: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, id?",
        jawab4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum quos rerum obcaecati, deleniti provident ab itaque aspernatur vero consectetur aliquid."
    }
]

import styles from "./style.module.css"
export default function Accordion2() {
  return (
    <>
    
      <div className="container">
        <div>
            <span className="accordion-title">Accordion 1</span>
            <h1 className={styles.coba}>isi accordion 1</h1>
        </div>
        <div className="accordion-faq">
    
        </div>
      </div>
    </>
  )
}
