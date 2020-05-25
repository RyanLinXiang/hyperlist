import React from "react";
import connectAPI from "./api";
import Item from "./Item";
import FullItem from "./FullItem";
import "./workaround.css"; // Bulma/React Bug with Icons and different styles applied

class Items extends React.Component {
  state = { fullItem: false, favAds: [] };

  handlerShowFull = (id) => {
    if (id)
      connectAPI("ad/" + id, "GET").then((e) => {
        this.setState({ fullItem: e });
      });
    else this.setState({ fullItem: false });
  };

  componentDidMount() {
    const token = this.props.token;
    if (token) {
      connectAPI("user/me/saved-ad", "GET", false, token).then((e) => {
        if (e.length) {
          const favAds = e.map((fav) => fav.id);
          this.setState({ favAds: favAds });
        }
      });
    }
  }

  handlerToggleFav = (id) => {
    const token = this.props.token;
    const favAds = [...this.state.favAds];
    const idx = favAds.findIndex((e) => e === id);

    if (idx > -1) {
      favAds.splice(idx, 1);
      connectAPI("user/me/saved-ad/" + id, "DELETE", false, token).then((e) => {
        this.setState({ favAds: favAds });
      });
    }
    if (idx === -1) {
      favAds.push(id);
      connectAPI("user/me/saved-ad/" + id, "POST", false, token).then((e) => {
        this.setState({ favAds: favAds });
      });
    }
  };

  render() {
    const { items, token, userid, handlerForRefreshHomepage } = this.props;
    const fullItem = this.state.fullItem ? this.state.fullItem : false;
    let colorclass, myAd;
    const favAds = this.state.favAds;
    if (fullItem) {
      colorclass = favAds.includes(fullItem.id) ? "yellow" : "grey";
      myAd = fullItem.userId === userid ? true : false;
    }

    return (
      <React.Fragment>
        {items
          ? items.map((e) => {
              const colorclass = favAds.includes(e.id) ? "yellow" : "grey";
              const myAd = e.userId === userid ? true : false;

              return (
                <Item
                  key={e.id}
                  id={e.id}
                  title={e.title}
                  description={e.description.substring(0, 99)}
                  handlerShowFull={this.handlerShowFull}
                  handlerToggleFav={this.handlerToggleFav}
                  handlerForRefreshHomepage={handlerForRefreshHomepage}
                  showeditbutton={myAd}
                  favcolor={colorclass}
                  token={token}
                />
              );
            })
          : null}
        {fullItem ? (
          <FullItem
            {...fullItem}
            handlerForCloseFull={this.handlerShowFull.bind(this, false)}
            handlerToggleFav={this.handlerToggleFav}
            handlerForRefreshHomepage={handlerForRefreshHomepage}
            favcolor={colorclass}
            showeditbutton={myAd}
            token={token}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

export default Items;
