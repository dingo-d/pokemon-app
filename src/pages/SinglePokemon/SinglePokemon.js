import React, {Component} from 'react';
import {observable, action} from 'mobx';
import {observer} from 'mobx-react';

import styles from './SinglePokemon.css';

import {getPokemon} from '../../services/api';
import {errorHandler} from '../../services/errorHandler';
import store from '../../state/store';

@observer
class SinglePokemon extends Component {
  constructor(args) {
    super(args);
    this.state = {
      name: '',
      gender: '',
      height: '',
      weight: '',
      description: '',
      type: '',
      imgUrl: ''
    }
  }

  componentWillMount() {
    const {id} = this.props.params;

    getPokemon(id).then((result) => {
      const attributes = result.data.attributes;
      const comments = result.data.relationships.comments;
      const type = result.data.types.data;

      const name = attributes.name;
      const gender = attributes.gender;
      const height = attributes.height;
      const weight = attributes.weight;
      const description = attributes.description;
      const imageUrl = attributes['image-url'];
      const typeID = type[0].id;
      const typeName = type[0].name;

      this.setState({
        name: name,
        gender: gender,
        height: height,
        weight: weight,
        description: description,
        type: typeName,
        imgUrl: imageUrl,
      });
    }).catch((error) => {
      const errorMessage = `Error: ${error}`;
      store.storeState.pokemonSingleMessage = errorMessage;
    });
  }

  render() {
    const pokemonImageUrl = `https://pokedex.byinfinum.co/${this.state.imageUrl}`;

    return (
      <div className={styles.item}>
        <h1 className={styles.title}>{this.state.name}</h1>
        <div className={styles.wrapper}>
          <div className={styles.imageWrapper}>
            <img className={styles.image} src={pokemonImageUrl} alt={this.state.name} />
          </div>
          <div className={styles.details}>
            <h3>ABOUT</h3>
            <p className={styles.description}>{this.state.description}</p>
            <h3>INFO</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default SinglePokemon;