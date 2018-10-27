```scss
body{
  padding: 20px;
}

.btn  {
  text-decoration: none;
  display: flex;
  justify-content:center;
  background-color: rebeccapurple;
  border-radius: 3px;
  box-shadow:0 3px 3px rgba(#000, .25) ;
  padding: 10px;
  color: #fff;
  width: 200px;
  transition: all 150ms ease;
  &:hover {
    background-color: lighten(rebeccapurple, 15%);
  }
  &:active {
    box-shadow: none;
    transform: translatey(1px);
  }
}
```
