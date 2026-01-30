import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  CardActions,
  TextField,
  Grid,
  Box,
  Paper,
  IconButton,
  Chip,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Switch,
  FormControlLabel,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Favorite,
  Share,
  Person,
  Email,
  Phone,
  Settings,
} from "@mui/icons-material";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Form submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
    );
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        background: darkMode
          ? "linear-gradient(to bottom, #1a1a1a 0%, #2d2d2d 100%)"
          : "linear-gradient(to bottom, #fff7ed 0%, #ffedd5 50%, #fed7aa 100%)",
        minHeight: "100vh",
      }}
    >
      {/* AppBar / Navigation */}
      <AppBar
        position="static"
        sx={{
          background:
            "linear-gradient(135deg, #f97316 0%, #ea580c 50%, #dc2626 100%)",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bold", fontSize: "1.5rem" }}
          >
            🌅 Sunset Material UI
          </Typography>
          <FormControlLabel
            control={
              <Switch
                checked={darkMode}
                onChange={(e) => setDarkMode(e.target.checked)}
                color="default"
              />
            }
            label="Dark Mode"
            sx={{ color: "white" }}
          />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        {/* Header Section */}
        <Paper
          elevation={8}
          sx={{
            p: 3,
            mb: 4,
            bgcolor: darkMode ? "#1e1e1e" : "white",
            borderRadius: "20px",
            border: "3px solid #f97316",
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{ color: darkMode ? "white" : "#ea580c", fontWeight: "bold" }}
          >
            Experiment-3: Material UI Components
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ color: darkMode ? "#aaa" : "#f97316" }}
          >
            A showcase of Material UI components in React
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Chip
              label="React"
              sx={{
                mr: 1,
                background: "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                color: "white",
                fontWeight: "bold",
              }}
            />
            <Chip
              label="Material UI"
              sx={{
                mr: 1,
                background: "linear-gradient(135deg, #fb923c 0%, #f97316 100%)",
                color: "white",
                fontWeight: "bold",
              }}
            />
            <Chip
              label="Vite"
              sx={{
                background: "linear-gradient(135deg, #fdba74 0%, #fb923c 100%)",
                color: "white",
                fontWeight: "bold",
              }}
            />
          </Box>
        </Paper>

        <Grid container spacing={3}>
          {/* Card Components */}
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                bgcolor: darkMode ? "#1e1e1e" : "white",
                borderRadius: "15px",
                border: "2px solid #f97316",
                boxShadow: "0 8px 20px rgba(249, 115, 22, 0.25)",
              }}
            >
              <CardContent
                sx={{
                  background: darkMode
                    ? "#1e1e1e"
                    : "linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)",
                }}
              >
                <Typography
                  variant="h5"
                  component="div"
                  gutterBottom
                  sx={{
                    color: darkMode ? "white" : "#ea580c",
                    fontWeight: "bold",
                  }}
                >
                  Card Component
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ color: darkMode ? "#aaa" : "#9a3412" }}
                >
                  Material UI provides beautiful card components for displaying
                  content in a structured way.
                </Typography>
              </CardContent>
              <CardActions
                sx={{ background: darkMode ? "#2a2a2a" : "#fed7aa" }}
              >
                <Button
                  size="small"
                  startIcon={<Favorite />}
                  sx={{ color: "#dc2626", fontWeight: "bold" }}
                >
                  Like
                </Button>
                <Button
                  size="small"
                  startIcon={<Share />}
                  sx={{ color: "#ea580c", fontWeight: "bold" }}
                >
                  Share
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              sx={{
                bgcolor: darkMode ? "#1e1e1e" : "white",
                borderRadius: "15px",
                border: "2px solid #fb923c",
                boxShadow: "0 8px 20px rgba(251, 146, 60, 0.25)",
              }}
            >
              <CardContent
                sx={{
                  background: darkMode
                    ? "#1e1e1e"
                    : "linear-gradient(135deg, #ffedd5 0%, #fed7aa 100%)",
                }}
              >
                <Typography
                  variant="h5"
                  component="div"
                  gutterBottom
                  sx={{
                    color: darkMode ? "white" : "#f97316",
                    fontWeight: "bold",
                  }}
                >
                  Buttons & Icons
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Button
                    variant="contained"
                    sx={{
                      mr: 1,
                      mb: 1,
                      background:
                        "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                      fontWeight: "bold",
                    }}
                  >
                    Contained
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      mr: 1,
                      mb: 1,
                      borderColor: "#f97316",
                      color: "#ea580c",
                      borderWidth: "2px",
                      fontWeight: "bold",
                    }}
                  >
                    Outlined
                  </Button>
                  <Button
                    variant="text"
                    sx={{ mb: 1, color: "#dc2626", fontWeight: "bold" }}
                  >
                    Text
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card
              sx={{
                bgcolor: darkMode ? "#1e1e1e" : "white",
                borderRadius: "15px",
                border: "2px solid #fdba74",
                boxShadow: "0 8px 20px rgba(253, 186, 116, 0.25)",
              }}
            >
              <CardContent
                sx={{
                  background: darkMode
                    ? "#1e1e1e"
                    : "linear-gradient(135deg, #fed7aa 0%, #fdba74 100%)",
                }}
              >
                <Typography
                  variant="h5"
                  component="div"
                  gutterBottom
                  sx={{
                    color: darkMode ? "white" : "#c2410c",
                    fontWeight: "bold",
                  }}
                >
                  User Profile
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                  <Avatar
                    sx={{
                      background:
                        "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                      mr: 2,
                      width: 56,
                      height: 56,
                    }}
                  >
                    <Person />
                  </Avatar>
                  <Box>
                    <Typography
                      variant="body1"
                      sx={{ color: darkMode ? "white" : "inherit" }}
                    >
                      John Doe
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ color: darkMode ? "#aaa" : "inherit" }}
                    >
                      john.doe@example.com
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={8}
              sx={{
                p: 3,
                bgcolor: darkMode ? "#1e1e1e" : "white",
                borderRadius: "20px",
                border: "3px solid #fb923c",
              }}
            >
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  color: darkMode ? "white" : "#ea580c",
                  fontWeight: "bold",
                }}
              >
                📧 Contact Form
              </Typography>
              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  margin="normal"
                  required
                  sx={{
                    "& .MuiInputLabel-root": {
                      color: darkMode ? "#aaa" : "inherit",
                    },
                    "& .MuiOutlinedInput-root": {
                      color: darkMode ? "white" : "inherit",
                      "& fieldset": {
                        borderColor: darkMode ? "#555" : "inherit",
                      },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  margin="normal"
                  required
                  sx={{
                    "& .MuiInputLabel-root": {
                      color: darkMode ? "#aaa" : "inherit",
                    },
                    "& .MuiOutlinedInput-root": {
                      color: darkMode ? "white" : "inherit",
                      "& fieldset": {
                        borderColor: darkMode ? "#555" : "inherit",
                      },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  margin="normal"
                  multiline
                  rows={4}
                  required
                  sx={{
                    "& .MuiInputLabel-root": {
                      color: darkMode ? "#aaa" : "inherit",
                    },
                    "& .MuiOutlinedInput-root": {
                      color: darkMode ? "white" : "inherit",
                      "& fieldset": {
                        borderColor: darkMode ? "#555" : "inherit",
                      },
                    },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    mt: 2,
                    background:
                      "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                  }}
                  fullWidth
                >
                  Submit
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* Contact List */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={8}
              sx={{
                p: 3,
                bgcolor: darkMode ? "#1e1e1e" : "white",
                borderRadius: "20px",
                border: "3px solid #fdba74",
              }}
            >
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  color: darkMode ? "white" : "#f97316",
                  fontWeight: "bold",
                }}
              >
                📞 Contact List
              </Typography>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        background:
                          "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
                      }}
                    >
                      <Email />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Email"
                    secondary="contact@example.com"
                    sx={{
                      "& .MuiListItemText-primary": {
                        color: darkMode ? "white" : "inherit",
                      },
                      "& .MuiListItemText-secondary": {
                        color: darkMode ? "#aaa" : "inherit",
                      },
                    }}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        background:
                          "linear-gradient(135deg, #fb923c 0%, #f97316 100%)",
                      }}
                    >
                      <Phone />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Phone"
                    secondary="+1 234 567 8900"
                    sx={{
                      "& .MuiListItemText-primary": {
                        color: darkMode ? "white" : "inherit",
                      },
                      "& .MuiListItemText-secondary": {
                        color: darkMode ? "#aaa" : "inherit",
                      },
                    }}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        background:
                          "linear-gradient(135deg, #fdba74 0%, #fb923c 100%)",
                      }}
                    >
                      <Settings />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Support"
                    secondary="24/7 Available"
                    sx={{
                      "& .MuiListItemText-primary": {
                        color: darkMode ? "white" : "inherit",
                      },
                      "& .MuiListItemText-secondary": {
                        color: darkMode ? "#aaa" : "inherit",
                      },
                    }}
                  />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>

        {/* Footer */}
        <Box sx={{ mt: 4, p: 2, textAlign: "center" }}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ color: darkMode ? "#aaa" : "#9a3412", fontWeight: "500" }}
          >
            © 2026 Material UI Demo - Created with React & Material UI
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
