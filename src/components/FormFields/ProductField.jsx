import React from 'react';
import { Grid, TextField, Button, Typography } from '@material-ui/core';
import { FieldArray, getIn } from 'formik';

export default function ProductField(props) {
  const { products, values, errors, touched, handleChange, handleBlur } = props;
  return (
    <FieldArray name={products.name}>
      {({ push, remove }) => (
        <div>
          {errors.products === 'required' &&
          touched.hasOwnProperty('products') ? (
            <div>
              <Typography variant="caption" style={{ color: '#f44336' }}>
                Please Input at least one product!
              </Typography>
            </div>
          ) : null}
          {values.products.map((p, index) => {
            const product = `products[${index}].product`;
            const touchedProduct = getIn(touched, product);
            const errorProduct = getIn(errors, product);
            return (
              <Grid key={p.id} container spacing={2}>
                <Grid item xs={10}>
                  <TextField
                    label="Product"
                    name={product}
                    value={p.product}
                    fullWidth
                    helperText={
                      touchedProduct && errorProduct ? errorProduct : ''
                    }
                    error={Boolean(touchedProduct && errorProduct)}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Grid>
                <Grid
                  item
                  xs={2}
                  container
                  direction="row"
                  alignItems="flex-end"
                >
                  <Button
                    type="button"
                    color="secondary"
                    onClick={() => remove(index)}
                  >
                    x
                  </Button>
                </Grid>
              </Grid>
            );
          })}
          <Button
            type="button"
            variant="outlined"
            onClick={() => push({ product: '' })}
          >
            Add
          </Button>
        </div>
      )}
    </FieldArray>
  );
}
