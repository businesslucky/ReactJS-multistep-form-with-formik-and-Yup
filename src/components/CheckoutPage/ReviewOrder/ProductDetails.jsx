import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';
import useStyles from './styles';

// const products = [
//   { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
//   { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
//   { name: 'Product 3', desc: 'Something else', price: '$6.51' },
//   { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
//   { name: 'Shipping', desc: '', price: 'Free' }
// ];

function ProductDetails(props) {
  const classes = useStyles();
  const { formValues } = props;
  const { products } = formValues;
  return (
    <List disablePadding>
      {products.map((product, index) => (
        <ListItem className={classes.listItem} key={index}>
          <ListItemText primary={product.product} secondary={product.product} />
          <Typography variant="body2">{product.product}</Typography>
        </ListItem>
      ))}
    </List>
  );
}

export default ProductDetails;
