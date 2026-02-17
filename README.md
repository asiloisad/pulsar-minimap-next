# minimap

A preview of the full source code.

## Features

- **Canvas-based rendering**: Fast and flexible minimap drawn on canvas.
- **Decoration API**: Use the same API to manage `TextEditor` and `Minimap` decorations.
- **Plugin system**: Extend the minimap with plugins that add markers, highlights, and more.
- **Stand-alone mode**: Display a minimap preview outside of a text editor for custom UIs.
- **Quick settings**: Toggle plugins and position directly from a dropdown on the minimap.

## Installation

To install `minimap` search for [minimap](https://web.pulsar-edit.dev/packages/minimap) in the Install pane of the Pulsar settings or run `ppm install minimap`. Alternatively, you can run `ppm install asiloisad/pulsar-minimap` to install a package directly from the GitHub repository.

## Provided Service `minimap`

Exposes the minimap API to other packages, allowing them to add decorations and interact with the minimap.

In your `package.json`:

```json
{
  "consumedServices": {
    "minimap": {
      "versions": { "1.0.0": "consumeMinimap" }
    }
  }
}
```

In your main module:

```javascript
consumeMinimap(api) {
  api.observeMinimaps((minimap) => {
    const decoration = minimap.decorateMarker(marker, {
      type: "line",
      color: "#ff0000",
      plugin: "my-plugin",
    });
  });
}
```

## Customization

The style can be adjusted according to user preferences in the `styles.less` file:

- e.g. hide the default editor scrollbar:

```less
atom-text-editor[with-minimap] .vertical-scrollbar {
  display: none;
}
```

- e.g. change the minimap background:

```less
atom-text-editor atom-text-editor-minimap {
  background: green;
}
```

- e.g. change the visible area color:

```less
atom-text-editor atom-text-editor-minimap .minimap-visible-area::after {
  background-color: rgba(0, 255, 0, 0.5);
}
```

- e.g. show minimap only in the focused pane:

```less
atom-text-editor {
  atom-text-editor-minimap {
    display: none;
  }
  &.is-focused {
    atom-text-editor-minimap {
      display: block;
    }
  }
}
```

## Contributing

Got ideas to make this package better, found a bug, or want to help add new features? Just drop your thoughts on GitHub — any feedback's welcome!
