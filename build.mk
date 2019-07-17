### Build the tendril-mongodb package. ###

### Settings ###
TENDRIL_MONGODB_SESSION_DIR:=$(PROJECT_PACKAGES_DIR)/tendril-mongodb-session
TENDRIL_MONGODB_SESSION_SRC_DIR:=$(TENDRIL_MONGODB_SESSION_DIR)/src
TENDRIL_MONGODB_SESSION_SRC_DIR_FILES:=$(shell find $(TENDRIL_MONGODB_SESSION_SRC_DIR) -type f)

### Graph ###

# Copy all the sources to the lib folder then run tsc.
$(TENDRIL_MONGODB_SESSION_BUILD): $(TENDRIL_MONGODB_SESSION_SRC_DIR)
	rm -R $@ 2> /dev/null || true 
	mkdir $@
	cp -R -u $(TENDRIL_MONGODB_SESSION_SRC_DIR)/* $@
	$(TSC) --project $@
	$(TOUCH) $@

$(TENDRIL_MONGODB_SESSION_SRC_DIR): $(TENDRIL_MONGODB_SESSION_SRC_DIR_FILES)
	$(TOUCH) $@
