import { writable } from 'svelte/store';
import localForage from 'localforage';

const { subscribe, set, update } = writable({});

function nextId(container) {
	let ids = Object.keys(container);
	ids = ids.length ? ids : [0];
	return Math.max(...ids) + 1;
}

async function pull() {
	const data = await localForage.getItem('notatnyk-svelte');
	const nullObj = { notes: {}, templates: {} };

	return set(data || nullObj);
}

async function persist() {
	let data;

	update((current) => {
		data = current;
		return current;
	});

	return await localForage.setItem('notatnyk-svelte', data);
}

function saveNote(note) {
	update((data) => {
		if (!note.id) {
			note.id = nextId(data.notes);
		}
		data.notes[note.id] = note;
		return data;
	});
}

function saveTemplate(template) {
	update((data) => {
		if (!template.id) {
			template.id = nextId(data.templates);
		}
		data.templates[template.id] = template;
		return data;
	});
}

function nullTemplate() {
	return {
		name: 'New Template',
		fields: {},
		refs: {}
	};
}

function nullNote() {
	return {
		name: 'New Note',
		fields: {},
		refs: {}
	};
}

function noteFromTemplate(template) {
	let note = nullNote();

	if (template) {
		note.fields = { ...template.fields };
		note.refs = { ...template.refs };
		note.template = template.id;
	}

	return note;
}

function deleteTemplate(id) {
	return update((data) => {
		delete data.templates[id];
		return data;
	});
}

function deleteNote(id) {
	return update((data) => {
		delete data.notes[id];
		return data;
	});
}

function deleteRef(container, id) {
	return update((data) => {
		delete container[id];
		return data;
	});
}

function deleteField(container, id) {
	return update((data) => {
		delete container[id];
		return data;
	});
}

export const data = {
	subscribe,
	pull,
	persist,
	saveNote,
	saveTemplate,
	nullTemplate,
	nullNote,
	noteFromTemplate,
	nextId,
	deleteTemplate,
	deleteNote,
	deleteRef,
	deleteField
};
