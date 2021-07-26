import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

export default function B64Decode(props) {
    const [value, setValue] = React.useState('');
    const [outValue, setOutValue] = React.useState('');

    const handleInputChange = (event) => {
        setValue(event.target.value);
    };

    const invokeAPI = () => {
        const url = 'https://zv4x1xlv0h.execute-api.ap-south-1.amazonaws.com/dev/utility/base64/decode';
        const postData = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ 'action': 'base64-decode', 'message': value })
        };
        fetch(url, postData)
            .then(result => result.json())
            .then((response) => {
                setOutValue(response["result"]);
            })
            .catch((error) => {
                alert('Error: ' + error);
            });
    };

    return (

        <Container maxWidth="md" style={{marginTop: '40px'}}>
            <Paper elevation={1}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            id="input"
                            label="Input"
                            multiline
                            rows={10}
                            value={value}
                            fullWidth
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary" fullWidth onClick={invokeAPI}>
                            Decode from base64
                    </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="output"
                            label="Output"
                            multiline
                            rows={10}
                            value={outValue}
                            fullWidth
                            disabled
                        />
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}