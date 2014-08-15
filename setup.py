#/usr/bin/env python
import codecs

from setuptools import setup, find_packages

import moz_header

long_description = codecs.open('README.rst', "r", "utf-8").read()


setup(
    name="django-moz-header",
    version=moz_header.__version__,
    author=moz_header.__author__,
    author_email=moz_header.__contact__,
    description=moz_header.__doc__,
    url=moz_header.__homepage__,
    packages=find_packages(),
    long_description=long_description,
    include_package_data=True,
    classifiers=[
        'Environment :: Web Environment',
        'Framework :: Django',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: BSD License',
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        'Topic :: Utilities'
    ],
)
