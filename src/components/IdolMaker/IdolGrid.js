import React from 'react';
import Grid from '@material-ui/core/Grid'
import IdolItem from '../ItemComponents/IdolItem'

export default function IdolGrid() {
    return (
        <Grid container spacing={2}>
            <IdolItem>

            </IdolItem>
            <IdolItem>

            </IdolItem>
            <IdolItem>

            </IdolItem>
        </Grid>
    );
}