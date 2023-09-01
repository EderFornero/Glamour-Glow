import React, { useState } from 'react';
import styles from './FAQ.module.css';
import faqs from "./faqs"

interface FAQItem {
    question: string;
    answer: string;
}


const FAQ: React.FC = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const handleToggleAccordion = (index: number) => {
        if (expandedIndex === index) {
            setExpandedIndex(null);
        } else {
            setExpandedIndex(index);
        }
    };

    return (
        <div className={styles.general}>
            <div className={styles.container}>
                <h3>Frequently Asked Questions</h3>
                <div className={styles.accordion}>
                    {faqs.map((faq: FAQItem, index: number) => (
                        <div className={styles['accordion-item']} key={index}>
                            <button
                                id={`accordion-button-${index}`}
                                aria-expanded={expandedIndex === index}
                                onClick={() => handleToggleAccordion(index)}
                            >
                                <span className={styles['accordion-title']}>{faq.question}</span>
                                <span className={styles.icon} aria-hidden="true"></span>
                            </button>
                            {expandedIndex === index && (
                                <div className={styles['accordion-content']}>
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
