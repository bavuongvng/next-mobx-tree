import { Container, Paper, makeStyles } from "@material-ui/core";
import { useMemo } from "react";
import { observer } from "mobx-react-lite";

import { Input } from "../components/elements";
import { LoginStore } from "../stores/LoginStore";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2, 3),
  },
  input: {
    marginTop: theme.spacing(2),
  },
}));

const Login = () => {
  const store = useMemo(() => LoginStore.create(), []);
  const classes = useStyles();

  return (
    <Container maxWidth="xs">
      <Paper className={classes.paper}>
        <form>
          <Input
            fullWidth
            value={store.username}
            onChange={store.setUsername}
            label="Username"
            className={classes.input}
          />
          <Input
            fullWidth
            value={store.password}
            onChange={store.setPassword}
            label="Password"
            className={classes.input}
            type="password"
          />
        </form>
      </Paper>
    </Container>
  );
};

export default observer(Login);
