import classes from "./MeetupDetail.module.css";

function MeetupDetail(props) {
    return (
        <section className={classes.detail}>
            
                <div>
                    <section className={classes.detail1}>
                    <div><img src={props.image} alt={props.title} /></div>
                    <div className={classes.youtube}>
                        <iframe
                            width="960"
                            height="630"
                            src={props.trailer}
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
                </section>
                </div>
                <h1>{props.title}</h1>
                <address>{props.address}</address>
                <div className= {classes.des}>Description:</div>
                <p>{props.description}</p>
           
        </section>
    );
}

export default MeetupDetail;
