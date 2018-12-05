import { GET_MIDI_DEVICES, GET_MIDI_DEVICES_SUCCESS, GET_MIDI_DEVICES_FAILURE, SELECT_MIDI_DEVICE, START_MIDI, STOP_MIDI, START_RECORDING_MIDI, MAP_MIDI_COMMAND, SELECT_CURRENT_MIDI_KEY } from "src/app/modules/midi/midi.actions";

export function tassign<T extends U, U>(target: T, ...source: U[]): T {
    return Object.assign({}, target, ...source);
}

export interface IMidiState {
    midiInputs: WebMidi.MIDIInput[];
    selectedInput: WebMidi.MIDIInput;
    midiMap: MidiKeyToCommandMap;
    midiRecord: boolean;
    midiLive: boolean;
    currentMidiKey: number;
}

export const MIDI_INIT_STATE: IMidiState = {
    midiInputs: [],
    selectedInput: null,
    midiMap: [],
    midiRecord: false,
    midiLive: false,
    currentMidiKey: null
}

class MidiActions {
    constructor(private state: IMidiState, private action) { }

    mapCommandToMidiKey() {
        let m = { ...this.state.midiMap };
        m[this.action.midiKey] = this.action.midiCommand;
        return tassign(this.state, {
            midiMap: m
        });
    }

    getMediDevicesSuccess() {
        this.state.midiInputs.push(this.action.midiInput);
        return tassign(this.state, {
            midiInputs: this.state.midiInputs
        });
    }

    selectMidiDevice() {
        return tassign(this.state, {
            selectedInput: this.action.selectedInput
        });
    }

    startRecordingMidi() {
        return tassign(this.state, {
            midiRecord: true,
            midiLive: false
        });
    }

    startMidi() {
        return tassign(this.state, {
            midiRecord: false,
            midiLive: true

        })
    }

    stopMidi() {
        return tassign(this.state, {
            midiRecord: false,
            midiLive: false

        })
    }

    selectCurrentMidiKey() {
        return tassign(this.state, {
            currentMidiKey: this.action.currentMidiKey
        })
    }


}

export function MidiReducer(state: IMidiState, action): IMidiState {
    if (state == null)
        return MIDI_INIT_STATE;
    let actions = new MidiActions(state, action);
    switch (action.type) {
        case GET_MIDI_DEVICES:
            break;
        case GET_MIDI_DEVICES_SUCCESS:
            return actions.getMediDevicesSuccess();
        case GET_MIDI_DEVICES_FAILURE:
            break;
        case SELECT_MIDI_DEVICE:
            return actions.selectMidiDevice();
        case START_MIDI:
            return actions.startMidi();
        case STOP_MIDI:
            return actions.stopMidi();
        case START_RECORDING_MIDI:
            return actions.startRecordingMidi();
        case MAP_MIDI_COMMAND:
            return actions.mapCommandToMidiKey();
        case SELECT_CURRENT_MIDI_KEY:
            return actions.selectCurrentMidiKey();
    }
    return state;
}