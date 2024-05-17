import {isObject} from './isObject';

const isCheckBoxInput = (element: HTMLInputElement): element is HTMLInputElement => element.type === 'checkbox';
type Event = { target: any };

export const getEventValue = (event: unknown) =>
  isObject(event) && (event as Event).target
    ? isCheckBoxInput((event as Event).target)
      ? (event as Event).target.checked
      : (event as Event).target.value
    : event;