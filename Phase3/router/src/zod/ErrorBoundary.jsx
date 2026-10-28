import {Component} from 'react'

export default class ErrorBoundary extends Component{
    state = {hasError: false}
    static getDerivedStateFromError(error){
        return {hasError:true}
    }
    componentDidCatch(error,info){
        console.log("caught error by the boundary",error, info)
    }
    render(){
        if(this.state.hasError){
            return <h2 className='h-screen bg-gray-500 text-3xl flex items-center'>Something went wrong here, pls try again</h2>
        }
        return this.props.children
    }
}
