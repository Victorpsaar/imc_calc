import { useState } from 'react'
import styles from './Form.module.css'


function Formulario() {
    let [peso, setPeso] = useState(0);
    let [altura, setAltura] = useState(0);
    let [imc, setImc] = useState(0);

    return(
        <>
        <form className={styles.form}>
            <p className='text'>O Índice de Massa Corporal (IMC) é uma das principais ferramentas, para calcular o chamado “peso ideal”. Obtido a partir do peso e da altura do indivíduo, o IMC também aponta níveis de magreza e obesidade.</p>

            <label className={styles.form__label}>Peso(Kg)</label>
            <input onBlur={e => setPeso(e.target.value)} type="number" required className={styles.form__control} />

            <label className={styles.form__label}>Altura(cm)</label>
            <input onBlur={e => setAltura(e.target.value)} type="number" required className={styles.form__control} />
            
            <button onClick={() => setImc(peso / 2 **(altura / 100))} className="btn" type='button'>Calcular</button>
            <p className="text">Verifique agora se você está no peso ideal!</p>
        </form>
        <h4>Resultado do seu IMC</h4>
        <div className={styles.flex}>
            <img className={styles.list__image} src="https://via.placeholder.com/200x200" alt="" />
            <ul className={styles.list}>
                <li className={styles.list__item}>
                    Peso:<span className={styles.span}>{peso}kg</span>
                </li>
                <li className={styles.list__item}>
                    Altura:<span className={styles.span}>{altura}cm</span>
                </li>
                <li className={styles.list__item}>
                    IMC:<span className={styles.span}>{imc.toFixed(2)}</span>
                </li>
                <li className={styles.list__item}>
                    Resultado:<span className={styles.span}></span>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Formulario
