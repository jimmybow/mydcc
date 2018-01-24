# Mydcc
My Dash Core Components 

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
    else: return( str(ddd['x']) + ' and ' + str(ddd['y'])  )
```

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

## Dash

Go to this link to learn about [Dash][].

## Getting started

```sh
# Install dependencies
$ npm install

# Watch source for changes and build to `lib/`
$ npm start
```

## Development

### Demo server

You can start up a demo development server to see a demo of the rendered
components:

```sh
$ builder run demo
$ open http://localhost:9000
```

You have to maintain the list of components in `demo/Demo.react.js`.

### Code quality and tests

#### To run lint and unit tests:

```sh
$ npm test
```

#### To run unit tests and watch for changes:

```sh
$ npm run test-watch
```

#### To debug unit tests in a browser (Chrome):

```sh
$ npm run test-debug
```

1. Wait until Chrome launches.
2. Click the "DEBUG" button in the top right corner.
3. Open up Chrome Devtools (`Cmd+opt+i`).
4. Click the "Sources" tab.
5. Find source files
  - Navigate to `webpack:// -> . -> spec/components` to find your test source files.
  - Navigate to `webpack:// -> [your/repo/path]] -> mydcc -> src` to find your component source files.
6. Now you can set breakpoints and reload the page to hit them.
7. The test output is available in the "Console" tab, or in any tab by pressing "Esc".

#### To run a specific test

In your test, append `.only` to a `describe` or `it` statement:

```javascript
describe.only('Foo component', () => {
    // ...
})l
```

### Testing your components in Dash

1. Build development bundle to `lib/` and watch for changes

        # Once this is started, you can just leave it running.
        $ npm start

2. Install module locally (after every change)

        # Generate metadata, and build the JavaScript bundle
        $ npm run install-local

        # Now you're done. For subsequent changes, if you've got `npm start`
        # running in a separate process, it's enough to just do:
        $ python setup.py install

3. Run the dash layout you want to test

        # Import mydcc to your layout, then run it:
        $ python my_dash_layout.py


**TODO:** There is a workflow that links your module into `site-packages` which would
make it unnecessary to re-run `2.` on every change: `python setup.py develop`.
Unfortunately, this doesn't seem to work with resources defined in
`package_data`.

See https://github.com/plotly/dash-components-archetype/issues/20


## Installing python package locally

Before publishing to PyPi, you can test installing the module locally:

```sh
# Install in `site-packages` on your machine
$ npm run install-local
```

## Uninstalling python package locally

```sh
$ npm run uninstall-local
```

## Publishing

For now, multiple steps are necessary for publishing to NPM and PyPi,
respectively. **TODO:**
[#5](https://github.com/plotly/dash-components-archetype/issues/5) will roll up
publishing steps into one workflow.

Ask @chriddyp to get NPM / PyPi package publishing accesss.

1. Preparing to publish to NPM

        # Bump the package version
        $ npm version major|minor|patch

        # Push branch and tags to repo
        $ git push --follow-tags

2. Preparing to publish to PyPi

        # Bump the PyPi package to the same version
        $ vi setup.py

        # Commit to github
        $ git add setup.py
        $ git commit -m "Bump pypi package version to vx.x.x"

3. Publish to npm and PyPi

        $ npm run publish-all

## Builder / Archetype

We use [Builder][] to centrally manage build configuration, dependencies, and
scripts.

To see all `builder` scripts available:

```sh
$ builder help
```

See the [dash-components-archetype][] repo for more information.


[Builder]: https://github.com/FormidableLabs/builder
[Dash]: https://github.com/plotly/dash2
[dash-components-archetype]: https://github.com/plotly/dash-components-archetype
