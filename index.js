var struct = require('observ-struct')
var observ = require('observ')
var route = require('route-event')
var Bus = require('@nichoth/events')

function loop (state) {
    var appState = struct({
        route: observ(null),
        state: state
    })

    var bus = Bus({
        memo: true
    })

    route(function onChange (path) {
        appState.route.set(path)
    })


    class Connector extends Component {
        constructor(props) {
            super(props)
            this.state = appStaate.state()
        }

        componentDidMount () {
            var self = this
            appState.state(function onChange (data) {
                self.setState(data)
            })
        }

        render () {
            return h(View, xtend(this.state, this.props, { emit }))
        }
    }


}

