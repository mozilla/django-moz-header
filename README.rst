Django-moz-header
^^^^^^^^^^^^^^^^^
Because ``{% include "http://mozilla.org/footer.html" %}`` would be naughty
---------------------------------------------------------------------------

Global header/footer templates and css shared between Django-powered sites
at Mozilla.

Out of the box, you get:

* Header/footer images, CSS set such that these image paths work if the CSS is
  served from media/global, both minified and not
* Fluid width for both header and footer
* JS that adds a hide delay on header drop downs


Requirements
^^^^^^^^^^^^

* Jinja 2.

* A jinja ``|f`` filter, used to interpolate parameters, like so::

    'visit {0}'|f('<span>mozilla</span>')

* The JS is optional, but using it requires jQuery; tested with 1.3 or later.


In Use By
^^^^^^^^^

The following projects are currently using this code:

* Kitsune_
* Nocturnal_
* Zamboni_

Please add your project to this list if you're using django-moz-header!

.. _Kitsune: https://github.com/jsocol/kitsune
.. _Nocturnal: https://github.com/mozilla/nocturnal
.. _Zamboni: https://github.com/jbalogh/zamboni
