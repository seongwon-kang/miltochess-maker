import React from 'react';
import Grid from '@HITerial-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import classes from '*.module.css';

export default function IdolForm() {
    return (
        <Grid container>
            <Grid item>
                <img></img>
                <input
                    accept="image/*"
                    className={classes.input}
                    id="current-sprite"
                    type="file"
                ></input>
                <label>
                    <Button variant="contained" color="primary" component="span">

                    </Button>
                </label>
            </Grid>
            <Grid item>
                <FormControl>
                    <TextField label="이름"></TextField>
                    <TextField label="태그"></TextField>
                </FormControl>
                <FormControl>
                    <TextField label="ATK"></TextField>
                    <TextField label="DEF"></TextField>
                </FormControl>
                <FormControl>
                    <TextField label="MAT"></TextField>
                    <TextField label="MDF"></TextField>
                </FormControl>
                <FormControl>
                    <TextField label="HIT"></TextField>
                    <TextField label="SPD"></TextField>
                </FormControl>
            </Grid>
        </Grid>
    );
}