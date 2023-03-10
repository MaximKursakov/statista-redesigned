import "./AspectSubscription.scss";

export function AspectSubscription() {
    return(
        <div className="aspect-subscription">
            <img src="./images/premium-product.svg"></img>
            <div className="subscription-state">
            <div className="subscription-content">
                <h2>Pro Version <span style={{color: "#583df5"}}>ON </span></h2>
                <p>You have access to all functions</p>
            </div>
            </div>
            <button>Edit subscription</button>
        </div>
    )
}