import { createStore } from "redux";
 
 const initialeState= {
    player1:0,
    player2:0,
    playing:true,
    winner:'egalite',
}

export const restartGame = ()=>({ type:'restartGame' })

export const playStop = ()=>({ type:'playStop'})

export const pointScored =(player)=>({
    type:'pointScored',
    player:player
})

export const winner =()=>({ type:'winner' })

function reducer(state=initialeState ,action ){
    switch (action.type) {
        case 'restartGame':
            return initialeState;
            break;

        case 'playStop':
            return {...state, playing: !state.playing};
            break;

        case 'pointScored':
            const player = action.player
            let point = 0;
            if(player == 'player1'){
                point = +state.player1 + 1;
                if(state.player2 < point)
                    return {...state,player1:point , winner:'player1'}
                else if(state.player2 > point)
                    return {...state,player1:point , winner:'player2'}
                else if(state.player2 == point)
                    return {...state,player1:point , winner:'egalite'}
            }else{
                point = +state.player2 + 1;
                if(state.player1 < point)
                    return {...state,player2:point , winner:'player2'}
                else if(state.player1 > point)
                    return {...state,player2:point , winner:'player1'}
                else if(state.player1 == point)
                    return {...state,player2:point , winner:'egalite'}
            }
            return state;
            break;

        default:
            return state;
            break;
    }
}

export const store = createStore(reducer)

