import React from 'react';
import Grid from '@material-ui/core/Grid';
import IdolGrid from '../IdolMaker/IdolGrid';
import IdolForm from '../IdolMaker/IdolForm';

export default function IdolMaker() {
    return (
        <Grid container id="idolMaker">
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <IdolForm></IdolForm>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <IdolGrid></IdolGrid>
                </Grid>
            </Grid>
        </Grid>
    );
}