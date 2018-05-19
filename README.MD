# Mydcc
My Dash Core Components 

- [Installing](#installing-)
- [Requirements](#requirements)
- [Usage](#usage-)
1. [mydcc.Listener](#1-mydcclistener-)
1. [mydcc.Listener_mapbox](#2-mydcclistener_mapbox-)
1. [mydcc.Relayout](#3-mydccrelayout-)
1. [mydcc.Change_trace](#4-mydccchange_trace-)
1. [mydcc.Change_trace_mapbox](#5-mydccchange_trace_mapbox-)
- [Learning more about dash ...](#dash)  

# Installing :
```
pip install mydcc
```

# Requirements：

* **dash** -- The core dash backend
* **dash-renderer** -- The dash front-end
* **dash-html-components** -- HTML components
* **dash-core-components** -- Supercharged components
* **plotly** -- Plotly graphing library used in examples

[↑](#mydcc)
# Usage :
```
import dash
import dash_core_components as dcc
import dash_html_components as html
from dash.dependencies import Input, Output, Event, State
import mydcc

app = dash.Dash()
app.layout = html.Div(...)

@app.callback(...)
def myfun(...):
    ...
    return ...

if __name__ == '__main__':
    app.run_server()
```
[↑](#mydcc)
# 1. mydcc.Listener : 
Get mouse position of plotly graph

Usage :
```
app.layout = html.Div([
    mydcc.Listener( id = "uuu", aim = 'graph' ),
    dcc.Graph( id = 'graph',
               figure = { 'data': [  {'x': [1, 2, 3], 'y': [4, 1, 2]}  ]  }
              ),
    html.Div( id = 'text' )
])

@app.callback(
    Output('text', 'children'),
    [Input('uuu', 'data')])
def myfun(ddd):
    if ddd is None : return('')
    return str(ddd['x']) + ' and ' + str(ddd['y']) 
```
[↑](#mydcc)
# 2. mydcc.Listener_mapbox : 
Get mouse position for plotly mapbox graph 

Usage :
```
app.layout = html.Div([
    mydcc.Listener_mapbox( id = "uuu", aim = 'graph'  ),
    dcc.Graph( id = 'ggg', figure = figgure_with_mapbox ),
    html.Div( id = 'text' )
])
  
@app.callback(
    Output('text', 'children'),
    [Input('uuu', 'data')])
def myfun(ddd):
    if ddd is None : return('')
    return str(ddd['x']) + ' and ' + str(ddd['y']) 
```
[↑](#mydcc)
# 3. mydcc.Relayout : 
Relayout plotly graph

Usage :
```
app.layout = html.Div([
    mydcc.Relayout( id = "rrr", aim = 'graph' ),
    dcc.Graph( id = 'graph',
               figure = { 'data': [  {'x': [1, 2, 3], 'y': [4, 1, 2]}  ]  }
              ),
    dcc.Input(id = 'in',
              placeholder = 'Enter a title ...',
              type = 'text',
              value = ''  
              )
])

@app.callback(
    Output('rrr', 'layout'),
    [Input('in', 'value')])
def myfun(x):
    return {'title':x}
```
[↑](#mydcc)
# 4. mydcc.Change_trace : 
Change plotly graph trace (only for graph with one trace )

Usage :
```
app.layout = html.Div([
    dcc.Graph(
        id = 'graph',    
        figure = {
            'data': [
                { 'x': [1, 2, 3], 'y': [4, 1, 2] },
            ],
            'layout': {
                'title': 'Dash Data Visualization',
                'xaxis': { 'range': [0,50] },
                'yaxis': { 'range': [0,50] }
            }
        }
    ),
    mydcc.Listener(id = "uuu", aim = 'graph'),
    mydcc.Change_trace(id = 'ii', aim = 'graph')
])

@app.callback(
    Output('ii', 'data'),
    [Input('uuu', 'data')])
def myfun(ddd):
    data = {'disable':'y'}
    if type(ddd['x']) != str and ddd['x'] < 30:
        data = dict(x = [ddd['x']],
                    y = [ddd['y']],
                    opacity = 1
                    )
    return data
```
[↑](#mydcc)
# 5. mydcc.Change_trace_mapbox : 
Change plotly mapbox graph trace (only for graph with one trace )

Usage :
```
app.layout = html.Div([
    dcc.Graph( id = 'graph', figure = figgure_with_mapbox ),
    mydcc.Listener_mapbox(id = "uuu", aim = 'graph'),
    mydcc.Change_trace_mapbox(id = 'ii', aim = 'graph')
])

@app.callback(
    Output('ii', 'data'),
    [Input('uuu', 'data')])
def myfun(ddd):
    data = {'lon':[1], 'lat':[1], 'type': 'scattermapbox'}
    if type(ddd['x']) != str :
        data = dict(lon = [ ddd['x'] ],
                    lat = [ ddd['y'] ],
                    type = 'scattermapbox',
                    opacity = 1
                    )
    return data
```
[↑](#mydcc)
## Dash
Go to this link to learn about [Dash](https://plot.ly/dash/).
