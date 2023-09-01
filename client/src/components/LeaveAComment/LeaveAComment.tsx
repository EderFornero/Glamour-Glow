import style from "./LeaveAComment.module.css"

const LeaveAComment = (): JSX.Element => {
    return (
        <form className={style.form}>
            <h2 className={style.title}> Leave a comment for us</h2>
            <div className={style['input-container']}>
                <label htmlFor="select">Which service did you buy?</label>
                <input type="text" />
            </div>
            <div className={style['input-container']}>
                <label htmlFor="rating">Rate the service</label>
                <input type="number" />
            </div>
            <div className={style['input-container']}>
                <label htmlFor="comment">Leave a comment</label>
                <textarea name="comment" rows={7} style={{ resize: "none" }}></textarea>
            </div>
            <button className={style.submit} type="submit">Leave comment</button>
        </form >
    )
}

export default LeaveAComment






