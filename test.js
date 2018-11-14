class HomeScreen extends React.Component {

    render() {
        const { Temperature } = this.data
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor:  Temperature ? `rgb(255, 87,${Math.floor(Temperature/3) * 34})` : 'rgb(255, 87, 34)'
              }}> 
                <Text style={{color: '#FFFFFF'}} h2>Temperature (C)</Text>
                <Text style={{color: '#FFFFFF'}} h3>{Temperature}</Text>
            </View>  
        );
    }

  constructor(props) {
    super(props);
    this.pubnub = new PubNubReact({
        publishKey: 'pub-c-d9956828-2ce7-474e-910f-1dcaf593948e',
        subscribeKey: 'sub-c-acded1fe-b58b-11e8-b27d-1678d61e8f93'
    });
    this.pubnub.init(this);
    this.data = {};
}
    componentWillMount() {
        this.pubnub.subscribe({
            channels: [this.props.navigation.state.params],
            withPresence: true
        });
        this.pubnub.addListener({
            status: function(statusEvent) {
            },
            message: (message) => {
                if(message.message != this.data){
                    this.data = message.message;
                    this.forceUpdate();
                }
            },
            presence: function(presenceEvent) {
            }
        })
    }
    componentWillUnmount() {
        this.pubnub.unsubscribe({
            channels: [this.props.navigation.state.params]
        })
    }
}

class CalendarScreen extends React.Component {

    render() {
        return (
            <Chart
                pubnub={this.pubnub}
                channels={['Channel-5vfqh8lqw']} type='spline-line' />
        );
      }

    constructor(props) {
        super(props);
        this.pubnub = new PubNubReact({
            publishKey: 'pub-c-d9956828-2ce7-474e-910f-1dcaf593948e',
            subscribeKey: 'sub-c-acded1fe-b58b-11e8-b27d-1678d61e8f93'
        });
        this.pubnub.init(this);
    }

    componentWillMount() {
        this.pubnub.subscribe({
            channels: [this.props.navigation.state.params],
            withPresence: true
        });
        this.pubnub.addListener({
            status: function(statusEvent) {
            },
            message: (message) => {
                if(message.message != this.data){
                    this.data = message.message;
                    this.forceUpdate();
                }
            },
            presence: function(presenceEvent) {
            }
        })
    }
      componentWillUnmount() {
        this.pubnub.unsubscribe({
            channels: [this.props.navigation.state.params]
        })
    }
}

return (
    <View style={styles.container}>
        <Text>Enough is enough</Text>
    </View>
    );
  }