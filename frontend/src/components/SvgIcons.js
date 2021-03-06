import React from 'react';

export const SearchIcon = () => {
  return (
    <svg className="search-form__icon" xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 32 32">
      <title>Search</title>
      <path xmlns="http://www.w3.org/2000/svg" d="M7.012 3c2.193 0 3.977 1.794 3.977 4 0 0.831-0.255 1.63-0.737 2.312l-0.392 0.553-0.55 0.393c-0.678 0.485-1.473 0.742-2.298 0.742-2.193 0-3.977-1.794-3.977-4s1.784-4 3.977-4zM7.012 1c-3.295 0-5.966 2.686-5.966 6s2.671 6 5.966 6c1.288 0 2.477-0.414 3.451-1.112l4.791 4.819c0.195 0.196 0.45 0.293 0.705 0.293s0.51-0.098 0.704-0.293c0.389-0.391 0.389-1.025 0-1.416l-4.791-4.819c0.694-0.98 1.105-2.177 1.105-3.471 0-3.314-2.671-6-5.965-6v0z"/>
    </svg>
  );
};

export const PhotoIcon = () => {
  return (
    <svg className="upload-icon" xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 32 32">
      <title>camera</title>
      <path xmlns="http://www.w3.org/2000/svg" d="M21 5h-3.5l-1.7-2.6c-0.2-0.2-0.5-0.4-0.8-0.4h-6c-0.3 0-0.6 0.2-0.8 0.4l-1.7 2.6h-3.5c-1.7 0-3 1.3-3 3v11c0 1.7 1.3 3 3 3h18c1.7 0 3-1.3 3-3v-11c0-1.7-1.3-3-3-3zM22 19c0 0.6-0.4 1-1 1h-18c-0.6 0-1-0.4-1-1v-11c0-0.6 0.4-1 1-1h4c0.3 0 0.6-0.2 0.8-0.4l1.7-2.6h4.9l1.7 2.6c0.3 0.2 0.6 0.4 0.9 0.4h4c0.6 0 1 0.4 1 1v11z"/>
      <path xmlns="http://www.w3.org/2000/svg" d="M12 8c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zM12 16c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"/>
    </svg>
  );
};

export const EventLocationIcon = () => {
  return (
    <svg className="icon__location" xmlns="http://www.w3.org/2000/svg" version="1.1" width="32" height="32" viewBox="0 0 32 32">
      <title>location</title>
      <path d="M16 0c-5.523 0-10 4.477-10 10 0 10 10 22 10 22s10-12 10-22c0-5.523-4.477-10-10-10zM16 16c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"/>
    </svg>
  );
};


export const PlusIcon = (props) => {
  return (
    <svg className="plus-icon" xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24">
      <title>{props.title}</title>
      <path d="M19 2h-14c-1.7 0-3 1.3-3 3v14c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-14c0-1.7-1.3-3-3-3zM20 19c0 0.6-0.4 1-1 1h-14c-0.6 0-1-0.4-1-1v-14c0-0.6 0.4-1 1-1h14c0.6 0 1 0.4 1 1v14z"/>
      <path d="M16 11h-3v-3c0-0.6-0.4-1-1-1s-1 0.4-1 1v3h-3c-0.6 0-1 0.4-1 1s0.4 1 1 1h3v3c0 0.6 0.4 1 1 1s1-0.4 1-1v-3h3c0.6 0 1-0.4 1-1s-0.4-1-1-1z"/>
    </svg>
  );
};

export const EventClockIcon = () => {
  return (
    <svg className="icon__clock" xmlns="http://www.w3.org/2000/svg" version="1.1" width="32" height="32" viewBox="0 0 32 32">
      <title>alarm</title>
      <path d="M16 4c-7.732 0-14 6.268-14 14s6.268 14 14 14 14-6.268 14-14-6.268-14-14-14zM16 29.25c-6.213 0-11.25-5.037-11.25-11.25s5.037-11.25 11.25-11.25c6.213 0 11.25 5.037 11.25 11.25s-5.037 11.25-11.25 11.25zM29.212 8.974c0.501-0.877 0.788-1.892 0.788-2.974 0-3.314-2.686-6-6-6-1.932 0-3.65 0.913-4.747 2.331 4.121 0.851 7.663 3.287 9.96 6.643v0zM12.748 2.331c-1.097-1.418-2.816-2.331-4.748-2.331-3.314 0-6 2.686-6 6 0 1.082 0.287 2.098 0.788 2.974 2.297-3.356 5.838-5.792 9.96-6.643z"/>
      <path d="M16 18v-8h-2v10h8v-2z"/>
    </svg>
  );
};

export const LocationIcon = () => {
  return (
    <svg className="search-form__icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
      <title>Pin</title>
      <path d="M16 0c-5.523 0-10 4.477-10 10 0 10 10 22 10 22s10-12 10-22c0-5.523-4.477-10-10-10zM16 16c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"/>
    </svg>
  );
};

export const EditIcon = () => {
  return (
    <svg className="edit-icon" xmlns="http://www.w3.org/2000/svg" version="1.1" width="20" height="20" viewBox="0 0 20 20">
      <title>edit</title>
      <path d="M17.561 2.439c-1.442-1.443-2.525-1.227-2.525-1.227l-12.826 12.825-1.010 4.762 4.763-1.010 12.826-12.823c-0.001 0 0.216-1.083-1.228-2.527zM5.68 17.217l-1.624 0.35c-0.156-0.293-0.345-0.586-0.69-0.932s-0.639-0.533-0.932-0.691l0.35-1.623 0.47-0.469c0 0 0.883 0.018 1.881 1.016 0.997 0.996 1.016 1.881 1.016 1.881l-0.471 0.468z"/>
    </svg>
  );
};

export const DeleteIcon = () => {
  return (
    <svg className="delete-icon" xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24">
      <title>delete</title>
      <path d="M13.4 12l5.3-5.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-5.3 5.3-5.3-5.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5.3 5.3-5.3 5.3c-0.4 0.4-0.4 1 0 1.4 0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l5.3-5.3 5.3 5.3c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4l-5.3-5.3z"/>
    </svg>
  );
};

export const RadioButton = () => {
  return (
    <svg className="radio-button" xmlns="http://www.w3.org/2000/svg" version="1.1" width="16" height="16" viewBox="0 0 32 32">
      <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM16 28c-6.627 0-12-5.373-12-12s5.373-12 12-12c6.627 0 12 5.373 12 12s-5.373 12-12 12zM10 16c0-3.314 2.686-6 6-6s6 2.686 6 6c0 3.314-2.686 6-6 6s-6-2.686-6-6z"/>
    </svg>
  );
};

export const EventIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24">
      <title>event_note</title>
      <path d="M14.016 14.016v1.969h-7.031v-1.969h7.031zM18.984 18.984v-10.969h-13.969v10.969h13.969zM18.984 3c1.078 0 2.016 0.938 2.016 2.016v13.969c0 1.078-0.938 2.016-2.016 2.016h-13.969c-1.125 0-2.016-0.938-2.016-2.016v-13.969c0-1.078 0.891-2.016 2.016-2.016h0.984v-2.016h2.016v2.016h7.969v-2.016h2.016v2.016h0.984zM17.016 9.984v2.016h-10.031v-2.016h10.031z"/>
    </svg>
  );
};

export const UsersIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="20" height="20" viewBox="0 0 20 20">
      <title>users</title>
      <path d="M15.989 19.129c0-2.246-2.187-3.389-4.317-4.307-2.123-0.914-2.801-1.684-2.801-3.334 0-0.989 0.648-0.667 0.932-2.481 0.12-0.752 0.692-0.012 0.802-1.729 0-0.684-0.313-0.854-0.313-0.854s0.159-1.013 0.221-1.793c0.064-0.817-0.398-2.56-2.301-3.095-0.332-0.341-0.557-0.882 0.467-1.424-2.24-0.104-2.761 1.068-3.954 1.93-1.015 0.756-1.289 1.953-1.24 2.59 0.065 0.78 0.223 1.793 0.223 1.793s-0.314 0.17-0.314 0.854c0.11 1.718 0.684 0.977 0.803 1.729 0.284 1.814 0.933 1.492 0.933 2.481 0 1.65-0.212 2.21-2.336 3.124-2.131 0.917-2.794 2.387-2.783 4.516 0.003 0.637-0.011 0.871-0.011 0.871h16c0 0-0.011-0.234-0.011-0.871zM18.528 13.365c-1.135-0.457-1.605-1.002-1.605-2.066 0-0.641 0.418-0.432 0.602-1.603 0.077-0.484 0.447-0.008 0.518-1.115 0-0.441-0.202-0.551-0.202-0.551s0.103-0.656 0.143-1.159c0.050-0.627-0.364-2.247-2.268-2.247s-2.318 1.62-2.269 2.247c0.042 0.502 0.144 1.159 0.144 1.159s-0.202 0.109-0.202 0.551c0.071 1.107 0.441 0.631 0.518 1.115 0.184 1.172 0.602 0.963 0.602 1.603 0 1.064-0.438 1.562-1.809 2.152-0.069 0.029-0.12 0.068-0.183 0.102 1.64 0.712 4.226 1.941 4.838 4.447h2.645c0 0 0-1.906 0-2.318 0-1-0.273-1.834-1.472-2.317z"/>
    </svg>
  );
};

export const PlusCircleIcon = () => {
  return (
    <svg className="plus-circle-icon" xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24">
      <path d="M12 1c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11zM12 21c-5 0-9-4-9-9s4-9 9-9c5 0 9 4 9 9s-4 9-9 9z"/>
      <path d="M16 11h-3v-3c0-0.6-0.4-1-1-1s-1 0.4-1 1v3h-3c-0.6 0-1 0.4-1 1s0.4 1 1 1h3v3c0 0.6 0.4 1 1 1s1-0.4 1-1v-3h3c0.6 0 1-0.4 1-1s-0.4-1-1-1z"/>
    </svg>
  );
};

export const QuestionIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="22" height="22" viewBox="0 0 32 32">
      <path d="M14 22h4v4h-4zM22 8c1.105 0 2 0.895 2 2v6l-6 4h-4v-2l6-4v-2h-10v-4h12zM16 3c-3.472 0-6.737 1.352-9.192 3.808s-3.808 5.72-3.808 9.192c0 3.472 1.352 6.737 3.808 9.192s5.72 3.808 9.192 3.808c3.472 0 6.737-1.352 9.192-3.808s3.808-5.72 3.808-9.192c0-3.472-1.352-6.737-3.808-9.192s-5.72-3.808-9.192-3.808zM16 0v0c8.837 0 16 7.163 16 16s-7.163 16-16 16c-8.837 0-16-7.163-16-16s7.163-16 16-16z"/>
    </svg>
  );
};

export const CheckedIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="22" height="22" viewBox="0 0 32 32">
      <path d="M16 0c-8.836 0-16 7.164-16 16s7.164 16 16 16 16-7.164 16-16-7.164-16-16-16zM13.52 23.383l-7.362-7.363 2.828-2.828 4.533 4.535 9.617-9.617 2.828 2.828-12.444 12.445z"/>
    </svg>
  );
};
